// https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/ipv4_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv4PoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Pool name displayed in the Apstra web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/ipv4_pool#name Ipv4Pool#name}
  */
  readonly name: string;
  /**
  * Detailed info about individual IPv4 CIDR allocations within the IPv4 Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/ipv4_pool#subnets Ipv4Pool#subnets}
  */
  readonly subnets: Ipv4PoolSubnets[] | cdktf.IResolvable;
}
export interface Ipv4PoolSubnets {
  /**
  * Network specification in CIDR syntax ("192.0.2.0/24").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/ipv4_pool#network Ipv4Pool#network}
  */
  readonly network: string;
}

export function ipv4PoolSubnetsToTerraform(struct?: Ipv4PoolSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function ipv4PoolSubnetsToHclTerraform(struct?: Ipv4PoolSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ipv4PoolSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Ipv4PoolSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv4PoolSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }

  // used_percentage - computed: true, optional: false, required: false
  public get usedPercentage() {
    return this.getNumberAttribute('used_percentage');
  }
}

export class Ipv4PoolSubnetsList extends cdktf.ComplexList {
  public internalValue? : Ipv4PoolSubnets[] | cdktf.IResolvable

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
  public get(index: number): Ipv4PoolSubnetsOutputReference {
    return new Ipv4PoolSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/ipv4_pool apstra_ipv4_pool}
*/
export class Ipv4Pool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_ipv4_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv4Pool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv4Pool to import
  * @param importFromId The id of the existing Ipv4Pool that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/ipv4_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv4Pool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_ipv4_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.94.0/docs/resources/ipv4_pool apstra_ipv4_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv4PoolConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv4PoolConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_ipv4_pool',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._subnets.internalValue = config.subnets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets = new Ipv4PoolSubnetsList(this, "subnets", true);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: Ipv4PoolSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }

  // used_percentage - computed: true, optional: false, required: false
  public get usedPercentage() {
    return this.getNumberAttribute('used_percentage');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      subnets: cdktf.listMapper(ipv4PoolSubnetsToTerraform, false)(this._subnets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnets: {
        value: cdktf.listMapperHcl(ipv4PoolSubnetsToHclTerraform, false)(this._subnets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Ipv4PoolSubnetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
