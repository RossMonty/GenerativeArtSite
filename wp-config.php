<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'generativeartsite_db' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost:3308' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '-T{?ev8!b:OL_0pZDk9+07U}(C$U*}`N`Zf*Q{`vn]`s!`$+F7^9O3T ])KD9@~z' );
define( 'SECURE_AUTH_KEY',  '(Vh`d1:nhH5%9n;g{5%mX@5~OA10|qZm5oo.3ZJ-r9zLW|_FL?M;nk*1^!c)tHte' );
define( 'LOGGED_IN_KEY',    'VPTc/TaNV0uAok(R^{9]NG<=udEE+l=Hf&MRmIIa(pI_F -^Gj)eZ8cHre J`M~O' );
define( 'NONCE_KEY',        'l-y^nU9SzMjq%9s!)IBhYBiIAuH$[KVBbH*u>hW65g;::$WE-tbL^y|)b4{?o9T/' );
define( 'AUTH_SALT',        '4*N9c~|c,=-4zji o(MJP1[a|LFEWp J^;zLly>@c^T[YlDSGE^ T:-^YYX@KEzG' );
define( 'SECURE_AUTH_SALT', '-a~E`Y,:1 OrFE>[s801@n|Xfbs#F3lzq@vuSGYfSzfQsPA?no]d+5Ud`ZF`TS9_' );
define( 'LOGGED_IN_SALT',   'h:g{7:xz,;]$ppOY>.;zO<KsF[x{ra3l&jhnf_M_F aq,0W5abtOgNAVX6h3P#HX' );
define( 'NONCE_SALT',       'OVrL`/z4P8VDqIJjY+PNpy^oo?A<-qCCP*W3kJL+`AmI)NM#mxxp-K+eB3e,A#:1' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
