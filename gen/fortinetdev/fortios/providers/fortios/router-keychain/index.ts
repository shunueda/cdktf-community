// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_keychain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterKeychainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_keychain#dynamic_sort_subtable RouterKeychain#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_keychain#get_all_tables RouterKeychain#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_keychain#id RouterKeychain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_keychain#name RouterKeychain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_keychain#vdomparam RouterKeychain#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_keychain#key RouterKeychain#key}
  */
  readonly key?: RouterKeychainKey[] | cdktf.IResolvable;
}
export interface RouterKeychainKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_keychain#accept_lifetime RouterKeychain#accept_lifetime}
  */
  readonly acceptLifetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_keychain#algorithm RouterKeychain#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_keychain#id RouterKeychain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_keychain#key_string RouterKeychain#key_string}
  */
  readonly keyString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_keychain#send_lifetime RouterKeychain#send_lifetime}
  */
  readonly sendLifetime?: string;
}

export function routerKeychainKeyToTerraform(struct?: RouterKeychainKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_lifetime: cdktf.stringToTerraform(struct!.acceptLifetime),
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    id: cdktf.numberToTerraform(struct!.id),
    key_string: cdktf.stringToTerraform(struct!.keyString),
    send_lifetime: cdktf.stringToTerraform(struct!.sendLifetime),
  }
}


export function routerKeychainKeyToHclTerraform(struct?: RouterKeychainKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.acceptLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_string: {
      value: cdktf.stringToHclTerraform(struct!.keyString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.sendLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterKeychainKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RouterKeychainKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifetime = this._acceptLifetime;
    }
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._keyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyString = this._keyString;
    }
    if (this._sendLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetime = this._sendLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterKeychainKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptLifetime = undefined;
      this._algorithm = undefined;
      this._id = undefined;
      this._keyString = undefined;
      this._sendLifetime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptLifetime = value.acceptLifetime;
      this._algorithm = value.algorithm;
      this._id = value.id;
      this._keyString = value.keyString;
      this._sendLifetime = value.sendLifetime;
    }
  }

  // accept_lifetime - computed: false, optional: true, required: false
  private _acceptLifetime?: string; 
  public get acceptLifetime() {
    return this.getStringAttribute('accept_lifetime');
  }
  public set acceptLifetime(value: string) {
    this._acceptLifetime = value;
  }
  public resetAcceptLifetime() {
    this._acceptLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifetimeInput() {
    return this._acceptLifetime;
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key_string - computed: false, optional: true, required: false
  private _keyString?: string; 
  public get keyString() {
    return this.getStringAttribute('key_string');
  }
  public set keyString(value: string) {
    this._keyString = value;
  }
  public resetKeyString() {
    this._keyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStringInput() {
    return this._keyString;
  }

  // send_lifetime - computed: false, optional: true, required: false
  private _sendLifetime?: string; 
  public get sendLifetime() {
    return this.getStringAttribute('send_lifetime');
  }
  public set sendLifetime(value: string) {
    this._sendLifetime = value;
  }
  public resetSendLifetime() {
    this._sendLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeInput() {
    return this._sendLifetime;
  }
}

export class RouterKeychainKeyList extends cdktf.ComplexList {
  public internalValue? : RouterKeychainKey[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RouterKeychainKeyOutputReference {
    return new RouterKeychainKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_keychain fortios_router_keychain}
*/
export class RouterKeychain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_router_keychain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterKeychain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterKeychain to import
  * @param importFromId The id of the existing RouterKeychain that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_keychain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterKeychain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_router_keychain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_keychain fortios_router_keychain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterKeychainConfig
  */
  public constructor(scope: Construct, id: string, config: RouterKeychainConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_router_keychain',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
    this._key.internalValue = config.key;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // key - computed: false, optional: true, required: false
  private _key = new RouterKeychainKeyList(this, "key", false);
  public get key() {
    return this._key;
  }
  public putKey(value: RouterKeychainKey[] | cdktf.IResolvable) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      key: cdktf.listMapper(routerKeychainKeyToTerraform, true)(this._key.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.listMapperHcl(routerKeychainKeyToHclTerraform, true)(this._key.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterKeychainKeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
